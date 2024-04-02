#ifndef TERMINATOR_H
#define TERMINATOR_H

#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
#include <sstream>
#include <fstream>
#include "utils.hpp"

class Terminator
{
    public:
        Terminator(std::string ProcessName, std::string ForbiddenName);

        void terminate(std::string process);
        void kill();

        std::string process_fn;
        std::string forbidden_fn;

        Paragraph Forbidden, T;

};


#endif
