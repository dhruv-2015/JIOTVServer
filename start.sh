while [ true ];
do ( node index.js ) && echo "Server Crashed Unexpatidly Restarting in 5 Seconds" && sleep 5
done