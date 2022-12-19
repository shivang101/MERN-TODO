#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;
    cin >> n;

    string s;
    cin >> s;

    vector<pair<int, int>> v;
    int cnt0 = 0;
    int cnt1 = 0;

    for (int i = 0; i < 2 * n; i++)
    {
        if (s[i] == '1')
        {
            cnt1++;
            v.push_back({1, i + 1});
        }
        else
        {
            cnt0++;
            v.push_back({0, i + 1});
        }
    }
    if (cnt1 == 2 * n || cnt0 == 2 * n)
    {
        cout << -1 << endl;
        return;
    }
    else
    {
        sort(v.begin(), v.end());
        for (int i = 0; i < n; i++)
        {
            cout << v[i].second << " ";
        }
        cout << endl;
        return;
    }
}

int main()
{
    // your code goes here
    int t;
    cin >> t;

    while (t--)
    {
        solve();
    }
    return 0;
}
