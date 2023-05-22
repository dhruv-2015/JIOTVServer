# JTV Server Update

## Update to latest version

Star repo if you find this helpful.

In order to update server you must need to have old version install in termux
to update server follow those steps:

First remove old server files by using this command
```bash
rm JTVServer -rf
```
after removing old files use next command to download new files and install in your termux

```bash
wget https://github.com/dhruv-2015/JIOTVServer/releases/download/V2.9.3/JTVServer.zip -N && unzip JTVServer.zip && rm JTVServer.zip

```
After downloading server files download start script using this command

```bash
curl -o start.sh https://raw.githubusercontent.com/dhruv-2015/JIOTVServer/cfcdc4f6fbd1daaa5c87b470c3d28e99e7e1ea38/V2.0.3/start.sh && sh start.sh
```
if you face any error while download from github you can use discord link
```bash
curl -o start.sh https://cdn.discordapp.com/attachments/1072165096656220170/1072186722315681852/start.sh && sh start.sh
```


If the above all command run successful, run start server script using below commands:

```bash
cd ~
```

```bash
sh start.sh
```
Till here, your server will start. This activity is one time only. Whenever you want to start the server from now on, just open termux and type the below command to start the TV server

```bash
sh start.sh
```


The server will now start.
Now go to your mobile's chrome browser and open http://localhost:3500/
