json.title @article.title
json.content @article.content
json.image @article.image
json.timestamp @article.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name @article.user.name
json.id @article.id