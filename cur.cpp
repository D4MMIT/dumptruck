#include <iostream>

using namespace std;

void standard_value_in();
int* return_int_array();

struct Student
{
    string name;
    int age;
    string school_name;
    int math_grade;
    int science_grade;
    int english_grade;
    double gpa;
};

int main(void)
{
    int* int_array_return_data = return_int_array();
    cout<<int_array_return_data[0] << " " <<int_array_return_data[1] <<" "<<int_array_return_data[2]<< endl;
    
    struct Student stud;

    stud.name = "Joe Doe";
    stud.age = 13;
    stud.school_name = "Lynbrook";

    cout << "Student Name " <<stud.name<<endl;
    
    delete int_array_return_data;
    return 0;
}

void standard_value_in(){
    int n;
    cin>>n;
    int datain[n];
    for(int i=0;i<n;i++){
        cin >> datain[i];
    }
}

void getline_in(){
    string dataline;
    getline(cin, dataline);
}

int* return_int_array(){
    int* int_array_data = new int[100];

    int_array_data[0] = 22;
    int_array_data[1] = 32;
    int_array_data[2] = 42;

    return int_array_data;
}