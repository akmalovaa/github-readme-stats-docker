# Self hosted github-readme-stats in docker

Project [github-readme-stats](https://github.com/anuraghazra/github-readme-stats). Dynamically generated stats github readmes and beautiful display of statistics Github profile

Examples:
[![example-image](https://camo.githubusercontent.com/8fd2570f103d1aae8a4d8970535274ae19c2ee62587d8868d618be37001263d0/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f616e7572616768617a72612f696d6167652f75706c6f61642f76313539353137343533362f6772732d7468656d65735f6c34796e6a612e706e67)]()


---

### You can just use the service from the author, but there is one problem

> **Warning**
> Project use deploy [vercel.app](https://github-readme-stats.vercel.app/api) and have only allows 5k requests per hour, and sometimes there are errors in the display - [more info](https://github.com/anuraghazra/github-readme-stats#deploy-on-your-own-vercel-instance)

I didn't want to do it in the vercel.app and used docker (docker-compose) to simple deploy in my homelab server


# Guide simple deploy using docker
Generate [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) 
Minimal permissions (you can choose nothing at all, just create)

```
git clone https://github.com/akmalovaa/github-readme-stats-docker.git
cd github-readme-stats-docker
```

## docker

```
docker build -t github-state .
docker run --name github-state -p 3000:3000 -e PAT_1=GITHUB_ACCESS_TOKEN -e USER=GITHUB_USER_NAME -d github-state
```
Change command where:

**GITHUB_ACCESS_TOKEN** = your access token

**GITHUB_USER_NAME** = your gihub login


## or docker-compose
Change **.env** file - input your login and token

```
docker-compose up -d
```


## Setting domain name
It remains only to configure the URL (dns, routing, proxy)
I use a dns manager cloudflare and separate self nginx proxy manager 
[https://github.akmalov.com/api](https://github.akmalov.com/api)

## Test

**Theme:** tokyonigh


[![img](https://github.akmalov.com/api?theme=tokyonight&count_private=true&show_icons=true)](https://github.akmalov.com/api?theme=tokyonight&count_private=true&show_icons=true)

[![img](https://github.akmalov.com/api/top-langs/?theme=tokyonight&count_private=true&show_icons=true)](https://github.akmalov.com/api/top-langs/?theme=tokyonight&count_private=true&show_icons=true)

[![img](https://github.akmalov.com/api/pin/?repo=github-readme-stats-docker&theme=tokyonight&count_private=true&show_icons=true)](https://github.akmalov.com/api/pin/?repo=github-readme-stats-docker&theme=tokyonight&count_private=true&show_icons=true)
