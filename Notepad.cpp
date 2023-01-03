#include <bits/stdc++.h>
#define lli long long int
using namespace std;

// Shivang101

void solve()
{
    int n;
    cin >> n;

    string s;
    cin >> s;

    unordered_map<string, int> mp;
    for (int i = 0; i < n - 1; i++)
    {
        string str = s.substr(i, 2);
        // cout << str << endl;
        if (mp.find(str) != mp.end())
        {
            if (mp[str] <= i - 2)
            {
                cout << "YES" << endl;
                return;
            }
        }
        else
        {
            mp[str] = i;
        }
    }
    cout << "NO" << endl;
    return;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    while (n--)
    {
        solve();
    }

    return 0;
}