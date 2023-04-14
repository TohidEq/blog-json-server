# Blog (Nhost)

simple blog, users can sign in/up/out and create new posts. other users can like them or give them a comment.

## Tables

| Tables   | Columns                                                |
| -------- | ------------------------------------------------------ |
| users    | id(u-id), name(first name, last name)                  |
| blogs    | id(b-id), text, user_id->(u-id), created_at            |
| likes    | id, blog_id->(b-id), user_id->(u-id)                   |
| comments | id, text, blog_id->(b-id), user_id->(u-id), created_at |
