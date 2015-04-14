#!/bin/bash

for var in "$@"
do
	if [ $(dpkg-query -W -f='${Status}' $var 2>/dev/null | grep -c "install ok installed") -eq 0 ];
	then
		echo $var
	fi
done
exit 0
