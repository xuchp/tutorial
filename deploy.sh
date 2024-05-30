###
 # @Date: 2024-05-30 09:32:08
 # @LastEditTime: 2024-05-30 09:36:02
 # @Description: 
 # @FilePath: /tutorial/deploy.sh
### 
# 忽略错误
set -e

git pull
echo 'please input commitMsg：'
read commitMsg

# 构建
yarn docs:build # 然后执行打包命令

git add .

git commit -m "$commitMsg"

git push 