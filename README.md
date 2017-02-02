#READS
####A virtual library, like the kind for books.

##deployed link
reads-.herokuapp.com

##ERD
Photo is in this directory as reads-erd.jpg
So you might notice a lot of extraneous tables in my erd and migrations. In the future, I'd like to turn this in to a way for users to follow eachothers book feeds. Because of the self many to many relationship with users, I needed a user_user join table. Also I wanted books to be able to have more than one genre, so I added a book_genre join table.
