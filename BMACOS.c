#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <pthread.h>
#include <string.h>
#include <stdbool.h>

void nums();
//bruteMACOS
int cur = 999;
char cmd[100] = "echo ";
//cmd = (char*)malloc(100); 
//strcat(passphrase, addon);

int main(){
    //system("");
    while(cur<4000){
        nums();
        printf("%s\n",cmd );
        strcpy(cmd,"echo ");
    }
}

void nums(){
    char temp[50] = "";
    char passphrase[10] = "69";
    char addon[10] = "";
    char sudos[20] = " | sudo -S -i";

    cur++;
    //int x = atoi(str);
    itoa(cur, addon, 10);
    strcat(temp,addon);
    strcat(temp,passphrase);

    strcpy(passphrase, temp);
    strcpy(temp,"");

    strcat(cmd,passphrase);
    strcat(cmd,sudos);
    
}
