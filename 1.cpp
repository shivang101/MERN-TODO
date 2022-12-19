#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;
    cin >> n;

    vector<int> arr(n + 1);

    for (int i = 1; i <= n; i++)
    {
        cin >> arr[i];
    }

    sort(arr.begin(), arr.end());

    long long int time = 0;
    bool flag = false;
    for (int i = 1; i <= n; i++)
    {
        if (i > arr[i])
        {
            time += (i - arr[i]);
        }
        else if (i < arr[i])
        {
            flag = true;
            break;
        }
    }
    if (flag)
    {
        cout << -1 << endl;
    }
    else
    {
        cout << time << endl;
    }
}

int main()
{
    int t;
    cin >> t;

    while (t--)
    {
        solve();
    }
    return 0;
}
