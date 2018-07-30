#include <iostream>
#include <cstring>
using namespace std;

union newType
{
    char model[10];
    int year;
    float maxSpeed;
};

int main()
{
    newType car[3];
    strcpy(car[0].model, "BMW 320i");
    car[1].year = 2003;
    car[2].maxSpeed = 260.5;

    cout<<car[0].model<<endl;
    cout<<"manufactured year - "<<car[1].year<<endl;
    cout<<"maximal speed is - "<<car[2].maxSpeed<<" km/h"<<endl;
    
}

