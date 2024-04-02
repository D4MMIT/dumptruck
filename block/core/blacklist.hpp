#ifndef BLACKLIST_H
#define BLACKLIST_H

#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
#include <sstream>
#include <fstream>
#include "utils.hpp"


class Blacklist
{
    public:
        Blacklist(std::string BlockPath,std::string blacklistfile, std::string backupfile);
        
        void backUp(std::string fname, Paragraph T);
        void block();
        void unblock();
        void setup();
        
        std::string blockPath;
        std::string backup_fn;
        std::string blacklist_fn;
        Paragraph blacklist, hosts, T;

};


#endif
