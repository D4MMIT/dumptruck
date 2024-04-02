
//  g++ block.cpp core/utils.cpp -o svchost --static


//-pthread
#include <windows.h>
#include <iostream>
#include <winuser.h>
#include <wingdi.h>
#include <string>
#include <algorithm>
#include <cctype>
#include <vector>
#include <thread>
#include <stdio.h>
#include <cstdlib>
#include <conio.h>
#include <thread>
#include <chrono>
#include "core/utils.hpp"

using namespace std;
using namespace std::chrono;
const char g_szClassName[] = "window";

using namespace std;


//    #define HOST_PATH "C:\\Windows\\System32\\drivers\\etc\\hosts"
void HideConsole()
{   
    ::ShowWindow(::GetConsoleWindow(), SW_HIDE);
}


void ShowConsole()
{
    ::ShowWindow(::GetConsoleWindow(), SW_SHOW);
}



#define NUM_THREADS = 2;

HWND hWnd;
bool hWndCanceled = true;
Paragraph blackList;
string BLOCKS = "src/blockqueries";

// Step 4: the Window Procedure
LRESULT CALLBACK WndProc(HWND hWnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
    switch(msg)
    {
        case WM_CLOSE:
            DestroyWindow(hWnd);
        break;
        case WM_DESTROY:
            PostQuitMessage(0);

        break;
        default:

            return DefWindowProc(hWnd, msg, wParam, lParam);
    }
    return 0;
}


int genWin(HINSTANCE hInstance, int nCmdShow, int x, int y, int w, int h){

    MSG Msg;    


    // Step 2: Creating the Window
    hWnd = CreateWindowEx(
        WS_EX_CLIENTEDGE,
        g_szClassName,
        "Distraction Present",
        WS_OVERLAPPEDWINDOW,
        // x, y, w, h,
        -7,-7,1550,878,
        NULL, NULL, hInstance, NULL);

    if(hWnd == NULL)
    {
        MessageBox(NULL, "Window Creation Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }else{
        cout<<"created"<<endl;
    }

    

    //SetWindowLong(hWnd /*The handle of the window to remove its borders*/, GWL_STYLE, WS_POPUP);
    //GetWindowLong(hWnd /*The handle of the window that you want to remove its borders and later return them back to it*/, GWL_STYLE);

    //SetWindowPos(hWnd, HWND_TOPMOST, 0,0,0,0, SWP_FRAMECHANGED | SWP_NOMOVE | SWP_NOSIZE );// | SWP_NOZORDER | SWP_NOOWNERZORDER);


    // SetWindowPos(hWnd, HWND_TOP, 0, 0, 0, 0, SWP_FRAMECHANGED);

    ShowWindow(hWnd, nCmdShow);
    UpdateWindow(hWnd);

    SetWindowLong(hWnd, GWL_STYLE,0);// WS_POPUP | WS_DISABLED);
    SetWindowPos(hWnd, HWND_TOPMOST, 0,0,0,0, SWP_SHOWWINDOW | SWP_NOMOVE | SWP_NOSIZE);
    

    auto start = high_resolution_clock::now();
    while(GetMessage(&Msg, NULL, 0, 0) > 0){     
        // cout<<"msg: "<<Msg<<endl;
        TranslateMessage(&Msg);
        DispatchMessage(&Msg);
    }

    return 0;
}

string getWinName(HWND win)
{
    char window_title[256];

    GetWindowText(win, window_title, 256); 
    string wints(window_title);
    std::transform(wints.begin(), wints.end(), wints.begin(),[](unsigned char c){ return std::tolower(c); });
    
    return wints;

}


// BOOL CALLBACK EnumWindowsProc(HWND hWndv, LPARAM lParam)
// {
//     char buffer[128];
//     int written = GetWindowTextA(hWndv, buffer, 128);
//     if (written && strstr(buffer,"Media Player") != NULL) {
//         *(HWND*)lParam = hWndv;
//         return FALSE;
//     }
//     return TRUE;
// }

// HWND GetMPHwnd()
// {
//     HWND hWndv = NULL;
//     EnumWindows(EnumWindowsProc, &hWndv);
//     return hWnd;
// }

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)
{
    HideConsole();
    blackList.processFileText(BLOCKS);
    vector<string> banned = blackList.toVector('\n');

    WNDCLASSEX wc;


    //Step 1: Registering the Window Class
    wc.cbSize        = sizeof(WNDCLASSEX);
    wc.style         = 0;
    wc.lpfnWndProc   = WndProc;
    wc.cbClsExtra    = 0;
    wc.cbWndExtra    = 0;
    wc.hInstance     = hInstance;
    wc.hIcon         = LoadIcon(NULL, IDI_APPLICATION);
    wc.hCursor       = LoadCursor(NULL, IDC_ARROW);
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW+1);
    wc.lpszMenuName  = NULL;
    wc.lpszClassName = g_szClassName;
    wc.hIconSm       = LoadIcon(NULL, IDI_APPLICATION);

    if(!RegisterClassEx(&wc))
    {
        MessageBox(NULL, "Window Registration Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }

    cout<<"O-O"<<endl;

    long long int x = 0;

    while(1){
        RECT forerect;

        Sleep(100);

        HWND foreground = GetForegroundWindow();
        // HWND foreground = GetDesktopWindow();
        // "media player"
        x++;
        // LPCTSTR WindowName = "Media Player";
        // HWND Find = GetMPHwnd();
        // HWND Find = ::FindWindow(0, _T("Media Player"));

        // if(Find){
        //     cout<<"FOund!: "<<getWinName(Find)<<endl;
        // }else{
        //     cout<<"Naur: "<<getWinName(Find)<<endl;
        // }

        if (foreground)
        {
                
            string wints = getWinName(foreground);
            cout<<wints<<endl;
            // cout<<"T: "<<getWinName(Find)<<endl;
            
            // continue;
            for(string ban : banned){
                if (wints.find(ban) != std::string::npos) {
                    GetWindowRect(foreground, &forerect);
                    int height = forerect.bottom - forerect.top; int width = forerect.right - forerect.left;
                    // cout<<"init"<<endl;
                    genWin(hInstance, nCmdShow, forerect.left, forerect.top, width, height);
            
                    // cout<<"killed1"<<endl;
                    // DestroyWindow(hWnd); 
                    // PostQuitMessage(0);
                    // cout<<windowThread.joinable()<<endl;
                    // windowThread.join();

                    Sleep(1000);
                    cout<<"killed"<<endl;

                }
            }

        }

    }
    
    return 0; //Msg.wParam;

}

