#include "utils.hpp"

#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
#include <sstream>
#include <fstream>


Paragraph::Paragraph(std::string text)
{
    T_xt = text;
}

Paragraph::Paragraph(){T_xt = "";}

std::string Paragraph::rawText(){ return T_xt; }

void Paragraph::processFileText(std::string fname)
{
    
    std::ifstream infile; infile.open(fname);
    std::stringstream ss; ss << infile.rdbuf();

    T_xt = ss.str();
}

void Paragraph::writeFile(std::string fname)
{
    std::ofstream f; f.open(fname);
    f << T_xt; f.close();

}

std::vector<std::string> Paragraph::toVector(char splitter)
{
    std::stringstream ss(T_xt); std::string tmp;
    std::vector<std::string> texts;

    while(getline(ss,tmp,splitter))
    {
        texts.push_back(tmp);
    }

    return texts;

}

void Paragraph::fromVector(std::vector<std::string> s,  char splitter)
{
    T_xt = "";
    for(int i=0; i<(s.size()-1); i++)
    {
        T_xt +=s[i]+splitter;
    }

    T_xt +=s[s.size()-1];
}

void Paragraph::extends(std::string s){this->T_xt+=s;}
void Paragraph::extends(Paragraph other){this->T_xt += other.rawText();}
void Paragraph::extends(Paragraph other, char separator)
{
    T_xt += separator+other.rawText();
}


void Paragraph::extends(std::vector<std::string> s, char seperator)
{
    std::vector<std::string> T = this->toVector(seperator);


    for(std::string s_ : s)
    {
        if (count(T.begin(), T.end(), s_)) 
        {
            continue;
        }else{
            T.push_back(s_);
        }
    }
    
    this->fromVector(T, seperator);

}

void erase_file(std::string fname){std::ofstream fd; fd.open(fname, std::ofstream::out | std::ofstream::trunc); fd.close();}

bool in(std::string s1, std::string s2){return s1.find(s2) != std::string::npos;}

