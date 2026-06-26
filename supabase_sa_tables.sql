-- SAサイト用のテーブル定義（NSCAサイトと混ざらないように接頭辞「sa_」を付与しています）

-- 1. SAプロフィールテーブル
-- Supabaseの auth.users と連携し、SAメンバーとしての権限や情報を管理します。
CREATE TABLE public.sa_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  is_sa_member BOOLEAN DEFAULT true, -- SAの機能にアクセスできるかどうかのフラグ
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS（Row Level Security）の設定
ALTER TABLE public.sa_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "SA Profiles are viewable by users who created them." ON public.sa_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert their own sa_profile." ON public.sa_profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own sa_profile." ON public.sa_profiles FOR UPDATE USING (auth.uid() = id);

-- auth.users作成時に自動でsa_profilesも作成したい場合は以下のトリガー関数を設定すると便利です（任意）
-- CREATE OR REPLACE FUNCTION public.handle_new_user()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   INSERT INTO public.sa_profiles (id, is_sa_member)
--   VALUES (new.id, true);
--   RETURN new;
-- END;
-- $$ LANGUAGE plpgsql SECURITY DEFINER;
-- CREATE TRIGGER on_auth_user_created
--   AFTER INSERT ON auth.users
--   FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- 2. お気に入りコラム保存テーブル
-- ユーザーごとの保存済みコラムを管理します。
CREATE TABLE public.sa_favorite_articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.sa_profiles(id) ON DELETE CASCADE NOT NULL,
  article_id TEXT NOT NULL, -- 例: 'benchpress/slug' のようにパスまたはIDを保存
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, article_id)
);

ALTER TABLE public.sa_favorite_articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own favorites" ON public.sa_favorite_articles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own favorites" ON public.sa_favorite_articles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own favorites" ON public.sa_favorite_articles FOR DELETE USING (auth.uid() = user_id);


-- 3. 既読履歴テーブル
-- 既読・未読状態を管理します。
CREATE TABLE public.sa_read_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.sa_profiles(id) ON DELETE CASCADE NOT NULL,
  article_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, article_id)
);

ALTER TABLE public.sa_read_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own read history" ON public.sa_read_history FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own read history" ON public.sa_read_history FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own read history" ON public.sa_read_history FOR DELETE USING (auth.uid() = user_id);
