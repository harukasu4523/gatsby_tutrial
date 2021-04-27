# gatsby_tutrial
<h1>dockerでのgatsby環境の構築とそのテスト</h1>
<div>
  clone後、Dockerfileのレポジトリ内で" docker-compose up -d --build "<br>
  2回目以降ymlファイルやDockerfileに変更がなければ" docker-compose up -d "でOk<br>
  " docker ps "でコンテナが動いているのを確認したら" docker exec -it gatsby sh " でコンテナ内に入る<br>
  " cd /home/node/app/hello-world "で移動して" gatsby develop --host=0.0.0.0 "で実行<br>
  ブラウザで http://localhost:8000/ で接続できればオッケー<br>
  終了時" exit "して" docker-compose down "で終了<br>
  自分で新しく作る場合はコンテナ内で"gatsby new hogehoge"で作れる<br>
</div>
<p>公式サイト</p>
https://www.gatsbyjs.com/
