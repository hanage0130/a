#include <bits/stdc++.h>
using namespace std;
int main()
{
    string s;
    vector<string> v;
    while (getline(cin, s))
    {
        v.push_back(s);
    }
    cout << "[";
    for (int i = 0; i < (int)v.size(); i++)
    {
        cout << '"' << v[i] << '"' << (i == (int)v.size() - 1 ? "" : ",");
    }
    cout << "]\n";
    return 0;
}