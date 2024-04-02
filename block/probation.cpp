
//  g++ probation.cpp core/utils.cpp core/blacklist.cpp core/terminator.cpp -o svchost --static

#include <iostream>
#include <stdlib.h>
#include <vector>
#include <cstring>
#include <string>
#include <sstream>
#include <fstream>
#include <algorithm>
#include <time.h>
#include <ctime>
#include <chrono>
#include "core/utils.hpp"
#include "core/blacklist.hpp"
#include "core/terminator.hpp"



#ifdef _WIN32
    #include <windows.h> 
//    #define HOST_PATH "C:\\Windows\\System32\\drivers\\etc\\hosts"
    void HideConsole()
    {   
        ::ShowWindow(::GetConsoleWindow(), SW_HIDE);
    }

    void ShowConsole()
    {
       ::ShowWindow(::GetConsoleWindow(), SW_SHOW);
    }

#else

    #include <unistd.h>
//    #define HOST_PATH "src/hosts"
    unsigned int microsecond = 1000000;

#endif

#define FOR(i, k) for (int i=0 ; i<k ; i++)



std::string BLOCKPATH = "130.127.204.224";

std::string BLACKLISTFN = "src/blocklist";
std::string FORBIDDENFN = "src/forbiddenapps";
std::string BACKUPFN = "conf/hosts_bl";
std::string PROCESSFN = "conf/processes";


void display()
{
    std::string display_ = "start src/5-10.png";
    system(display_.c_str());

}
    

int main()
{

    using std::chrono::high_resolution_clock;
    using std::chrono::duration_cast;
    using std::chrono::duration;
    using std::chrono::milliseconds;

    Terminator TM(PROCESSFN, FORBIDDENFN);
    Blacklist bl(BLOCKPATH, BLACKLISTFN, BACKUPFN);



    HideConsole();
    int x = 0;
    while(true)
    {
        TM.kill();
        bl.block();

        #ifdef _WIN32
            Sleep(1000);
        #else
            sleep(1);
        #endif


        x++;

        if(x%(60*24)==0){
            display();
        }

    }   
    

    return 0;
}
