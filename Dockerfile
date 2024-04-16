# 使用するNode.jsのバージョンを指定
FROM node:16

# コンテナ内での作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコンテナにコピー
COPY package*.json ./

# npmを使用して依存関係をインストール
RUN npm install

# 残りのプロジェクトファイルをコンテナにコピー
COPY . .

# Vue CLIが使用するポートを公開
EXPOSE 8080

# コンテナ起動時に実行するコマンド
CMD ["npm", "run", "serve"]