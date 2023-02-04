cd JTVServer
while [ true ];
do (node index.js) && echo "Server Crashed restarting in 5 seconds" && sleep 5
done
