#!/bin/bash

for var in "${@:3}"
do
	if [ $($1 $var 2>/dev/null | grep -c "$2") -eq 0 ];
	then
		echo $var
	fi
done
exit 0
