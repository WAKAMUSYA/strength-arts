-- 1. お気に入りテーブルの外部キーを `profiles` テーブルへ付け替える
ALTER TABLE public.sa_favorite_articles DROP CONSTRAINT IF EXISTS sa_favorite_articles_user_id_fkey;
ALTER TABLE public.sa_favorite_articles ADD CONSTRAINT sa_favorite_articles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;

-- 2. 既読履歴テーブルの外部キーを `profiles` テーブルへ付け替える
ALTER TABLE public.sa_read_history DROP CONSTRAINT IF EXISTS sa_read_history_user_id_fkey;
ALTER TABLE public.sa_read_history ADD CONSTRAINT sa_read_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;

-- 3. （オプション）不要になった sa_profiles テーブルを削除
DROP TABLE IF EXISTS public.sa_profiles;
