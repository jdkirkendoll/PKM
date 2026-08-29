# customer-vault-export.bundle

Full git history (7 commits) for the customer engagement data removed from this
vault in this branch: `1-Projects/CIR/` and the customer-specific templates
(`CRIMS Specification.md`, `Templates/Discovery/*`), plus a README for the new
vault. Extracted with `git filter-repo` so history is intact, not just a
snapshot.

Claude's GitHub access didn't cover creating/pushing to `jdkirkendoll/PKM-CUST`
from this session, so this bundle is the handoff — push it from a machine that
does have access:

```
git clone customer-vault-export.bundle PKM-CUST
cd PKM-CUST
git remote add origin https://github.com/jdkirkendoll/PKM-CUST.git
git push -u origin main
```

Once pushed, delete `customer-vault-export.bundle` and this file from the PKM
repo — they only need to exist until the handoff is done.
