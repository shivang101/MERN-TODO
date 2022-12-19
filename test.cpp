#include <iostream>
#include <bits/stdc++.h>
using namespace std;
void solve()
{
    int n, k;
    cin >> n >> k;

    int c[n]{0};
    int t[n]{0};

    unordered_set<int> st;
    for (int i = 0; i < n; i++)
    {
        cin >> c[i];
        st.insert(c[i]);
    }
    for (int i = 0; i < n; i++)
    {
        cin >> t[i];
    }

    if (st.size() < k)
    {
        cout << -1 << endl;
        return;
    }

    vector<pair<int, int>> v;
    for (int i = 0; i < n; i++)
    {
        v.push_back({t[i], c[i]});
    }
    sort(v.begin(), v.end());

    unordered_set<int> visited;

    long long int time = 0;
    int cnt = 0;
    for (auto x : v)
    {
        if (visited.find(x.second) == visited.end() && cnt < k)
        {
            visited.insert(x.second);
            time += x.first;
            cnt++;
        }
    }
    cout << time << endl;
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
