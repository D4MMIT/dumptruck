#ifndef UTILS_H
#define UTILS_H

#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
#include <sstream>
#include <fstream>

class Paragraph
{
    public:
        Paragraph();
        Paragraph(std::string text);
        
        void processFileText(std::string fname);
        void writeFile(std::string fname);
        void fromVector(std::vector<std::string> s, char splitter);

        void extends(std::string s);
        void extends(Paragraph other);
        void extends(Paragraph other, char separator);
        void extends(std::vector<std::string> s, char separator);

        std::string rawText();
        std::vector<std::string> toVector(char splitter);
        std::string T_xt;

};

void erase_file(std::string fname);
bool in(std::string s1, std::string s2);

#endif
