
//  g++ probation.cpp core/utils.cpp core/blacklist.cpp core/terminator.cpp -o probation --static

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



using namespace std;

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

#define FOR(i, k) for (int i=0 ; i<k ; i++)



void display()
{
    string display_ = "start src/remind.jpg";
    system(display_.c_str());

}
    

int main()
{
    cout<<"boot"<<endl;
    Sleep(2000);
    HideConsole();
    cout<<"invis"<<endl;
    Sleep(3000);
    ShowConsole();
    Sleep(2000);
    return 0;
}
