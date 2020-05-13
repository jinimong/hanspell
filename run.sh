if [[ "$(docker images -q hanspell:latest 2> /dev/null)" == "" ]]; then
  docker build --tag hanspell ./
fi
docker run --rm -p 3000:3000 hanspell
