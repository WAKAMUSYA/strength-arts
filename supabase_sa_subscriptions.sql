-- SAサブスクリプション管理用テーブル
-- StripeのWebhookを受け取って更新される決済・契約状況の記録テーブル

CREATE TABLE public.sa_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  product_key TEXT NOT NULL DEFAULT 'strength_arts_member',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  status TEXT NOT NULL DEFAULT 'active', -- 'active' | 'canceled' | 'expired' | 'past_due'
  current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (user_id, product_key)
);

ALTER TABLE public.sa_subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read their own subscriptions" ON public.sa_subscriptions FOR SELECT USING (auth.uid() = user_id);
-- 更新はサーバー（Webhook）からのみ行うため、一般ユーザーのUPDATEやINSERTは許可しません。
