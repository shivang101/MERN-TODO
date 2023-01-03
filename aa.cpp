#include <bits/stdc++.h>
#define lli long long int
using namespace std;

// Shivang101

void solve()
{
    lli n, m;
    cin >> n >> m;
    lli arr[n];
    lli fans = 0;
    for (lli i = 0; i < n; i++)
    {
        cin >> arr[i];
        fans += arr[i];
    }
    lli b[m];
    for (lli i = 0; i < m; i++)
    {
        cin >> b[i];
    }
    sort(arr, arr + n);
    sort(b, b + m);
    reverse(b, b + m);

    if (m >= n)
    {
        lli ans = 0;
        for (int i = 0; i < n; i++)
        {
            ans += b[i];
        }
        cout << ans << endl;
        return;
    }
    lli i = 0;
    lli j = 0;
    // cout << fans << endl;
    while (i < n)
    {
        fans = fans + b[j] - arr[i];
        // cout << b[j] << " " << arr[i] << endl;
        i++;
        j++;
    }
    cout << fans << endl;
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