npm run start - чтобы запустить сервер nodeJs
ssh root@79.174.84.106 - зайти на удаленный сервер
mysql -u root -p - зайти в mysql  чтобы проверить статус
npm install -g pm2 - установить глобально Менеджер процессов для Node.js pm2
pm2 start index.js - Запуск сервера с pm2
pm2 restart index.js - Перезапуск сервера
pm2 stop index.js - Остановка сервера
pm2 list - Просмотр состояния серверов
pm2 logs - Просмотр логов
pm2 startup - Автозапуск при перезагрузке сервера