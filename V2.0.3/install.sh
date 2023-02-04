#!/bin/bash

# This scripts perform installation of required dependencies on termux
echo "updating repo"
# Install nodejs
pkg update

if [ $? -eq 0 ]; then
   echo "update successful"
else
    echo "Failed to update. Exiting"
    exit 1
fi
echo "installing nodejs"
pkg install nodejs-lts -y

if [ $? -eq 0 ]; then
   echo "Installation successful"
else
    echo "Failed to install nodejs. Exiting"
    exit 1
fi
echo "downloading script"
# Get the latest release of code
curl https://cdn.discordapp.com/attachments/971776543229632534/1071422927561568327/JTVServer.zip -o JTVServer.zip


if [ $? -eq 0 ]; then
   echo "Downloaded the server successfully. "
else
    echo "Failed to download the server. Is wget installed?"
    exit 1
fi
echo "Unzip the downloaded file"
# Unzip the downloaded file
unzip JTVServer.zip

if [ $? -eq 0 ]; then
   echo "File unzipped"
else
    echo "Failed to unzip the file"
    exit 1
fi
echo "removing source"
rm JTVServer.zip

if [ $? -eq 0 ]; then
   echo "Deleted source"
else
    echo "Failed to delete the source"
fi

echo "Downloading start server script"
cd ~
curl -o start.sh https://raw.githubusercontent.com/dhruv-2015/JIOTVServer/main/V2.0.3/start.sh
if [ $? -eq 0 ]; then
   echo "Script downloaded successfully"
else
    echo "Failed to download start script. Please run wget https://raw.githubusercontent.com/dhruv-2015/JIOTVServer/main/V2.0.3/start.sh to download"
    exit 1
fi

cd ~
echo "==========================================================="
echo "INSTALLATION COMPLETED"
echo "RUN SERVER START SCRIPT TO START THE SERVER"
echo "==========================================================="
