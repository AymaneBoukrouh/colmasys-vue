<template>
	<div class="post bg-dark">
		<div class="post-vote-buttons-container">
			<div class="post-vote-buttons">
				<button @click="sendVote(true, 'post', id)" class="vote" :id="'upvote-post-' + id">
					<i class="bi bi-chevron-up"></i>
				</button>
				<div class="post-votes" id="votes-post-{{ id }}">{{ n_votes }}</div>
				<button @click="sendVote(false, 'post', id)" class="vote" :id="'downvote-post-' + id">
					<i class="bi bi-chevron-down"></i>
				</button>
			</div>
		</div>
		<div class="post-author">
			<div><i class="bi bi-person-circle"></i>&nbsp;{{ author }}</div>
			<div class="dropdown post-dots-container">
				<button class="post-dots" type="button" id="post-settings" data-bs-toggle="dropdown" aria-expanded="false">
					<i class="bi bi-three-dots-vertical"></i>
				</button>
				<!-- {% if True %} user.is_authenticated -->
				<!-- {% if True %} current_user.id == post.user_id -->
				<div class="dropdown-menu dropdown-menu-end" aria-labelledby="post-settings">
					<router-link :to="{ name: 'EditPost', params: {id: id} }" class="dropdown-item">Edit</router-link>
					<button @click="deletePost" class="dropdown-item delete" data-type="post" :data-id="id"><span style="color: red">Delete</span></button>
				</div>
				<!-- {% else %}
				<div class="dropdown-menu" aria-labelledby="post-settings">
					<a class="dropdown-item" href="#"><span style="color: red">Delete</span></a>
					<a class="dropdown-item" href="#">Edit</a>
					<a class="dropdown-item" href="#">Bookmark</a>
					<a class="dropdown-item" href="#">Report</a>
				</div>
				{% endif %}
				{% endif %} -->
			</div>
		</div>
		<div class="post-title">{{ title }}</div>
		<div class="post-content" style="white-space: pre-wrap;">{{ content }}</div>
		<div class="post-comments-button">comments ({{ n_comments }})</div>
	</div>
	<div class="comments">
		<div class="comment" style="margin-bottom: 20px;">
			<div class="comment-content" id="user-comment-content">
				<span class="comment-author"><i class="bi-person-circle"></i></span>
				&nbsp;<b>CURRENT_USER.USERNAME</b><br>
				<input @keyup.enter="addComment" v-model="comment" class="form-control" type="text" id="user-comment" placeholder="add a comment...">
			</div>
		</div>
		<div class="comment" v-for="comment of comments">
			<div class="comment-content">
				<span class="comment-author"><i class="bi bi-person-circle"></i></span>
				&nbsp;<b>{{ comment.author }}</b>&nbsp;{{ comment.creation_datetime }}<br>
				<input class="comment-content-input" :data-id="comment.id " :id="'comment-'+ comment.id" :value="comment.content" disabled>
			</div>
			<div class="comment-buttons-container">
				<button @click="sendVote(true, 'comment', comment.id)" class="vote" :id="'upvote-comment-' + comment.id">
					<i class="bi bi-chevron-up"></i>
				</button>
				<span class="comment-votes" :id="'votes-comment-' + comment.id">{{ comment.n_votes }}</span>
				<button @click="sendVote(false, 'comment', comment.id)" class="vote" :id="'downvote-comment-' + comment.id">
					<i class="bi bi-chevron-down"></i>
				</button>
				<!--{% if comment.user_id == current_user.id %}
				<button class="edit" data-id="{{ comment.id }}" id="edit-{{ comment.id }}">edit</button>
				<button class="delete" data-type="comment" data-id="{{ comment.id }}">delete</button>
				{% endif %}-->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async mounted () {
		await fetch(`http://localhost:8000/post/${this.id}`)
    .then((response) => response.json()
      .then((data) => {
        this.author = data.author;
				this.title = data.title;
				this.content = data.content;
				this.n_votes = data.n_votes;
				this.n_comments = data.n_comments;
				this.comments = data.comments;
      })
    )
	},
	methods: {
		addComment: async function (event) {
			console.log(this.comment);

			const content = this.comment;
			
			const response = await fetch(`http://localhost:8000/post/${this.id}/comment`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ content: content })
      });

			this.comments.unshift({
				author: this.author,
				content: content
			});

			this.comment = '';
			this.n_comments = this.n_comments + 1;
		},
    sendVote: async function (value, type, id) {
      await fetch(`http://localhost:8000/${type}/${this.id}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })
      })
      .then((response) => response.json()
        .then((data) => {
          if (data.type == 'upvote') {
            $(`#upvote-${type}-${id}`).addClass('active');
            $(`#downvote-${type}-${id}`).removeClass('active');
          } else if (data.type == 'downvote') {
            $(`#upvote-${type}-${id}`).removeClass('active');
            $(`#downvote-${type}-${id}`).addClass('active');
          } else {
            $(`#upvote-${type}-${id}`).removeClass('active');
            $(`#downvote-${type}-${id}`).removeClass('active');
          }

					if (type == 'post')
						this.n_votes = data.n_votes;
					else {
						this.comments.find(comment => comment.id === id).n_votes = data.n_votes;
					}
        })
      );
    },
		deletePost: async function () {
			const response = await fetch(`http://localhost:8000/post/${this.id}`, { method: 'DELETE' });
			this.$router.push({name: 'Feed'});
		}
	},
  data() {
    return {
      id: this.$route.params.id,
			author: null,
			title: null,
			content: null,
			comments: null,
			n_votes: null,
			n_comments: null,
			comment: null
    }
  }
}
</script>

<style scoped>
.post {
	display: grid;
	grid-template-columns: 50px calc(100% - 50px);
	grid-template-rows: 50px 50px auto auto;
	background-color: #242526;
	margin: 10px 600px;
	margin-bottom: 0;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	color: white;
}

.post-vote-buttons-container {
	display: inline-grid;
	grid-column: 1/2;
	grid-row: 1/4;
	border-right: solid 1px rgba(176, 179, 184, 0.05);
	text-align: center;
	vertical-align: middle;
	align-items: center;
}

.vote {
	font-size: 26px;
	border: none;
	background: none;
	color: white;
}

.post-votes {
	text-align: center;
}

.comment-buttons-container {
	display: flex;
	flex-direction: right;
	align-items: center;
	position: relative;
	margin-left: 20px;
	margin-bottom: 20px;
	color: white;
	height: 30px;
}

.comment-buttons-container > button {
	border: none;
	background: none;
	color: white;
	padding: 0 10px;
}

.comment-vote-buttons {
	display: inline-block;
}

.comment-vote-buttons > button {
	display: inline-block;
}

.comment-vote-buttons > button > i {
	padding: 5px;
}

.comment-content-input {
	background: none;
	border: none;
	color: white
}


.comment-votes {
	padding: 0 5px;
}

.post-author {
	position: relative;
	display: inline-grid;
	border-bottom: solid 1px rgba(176, 179, 184, 0.05);
	grid-column: 2/3;
	grid-row: 1/2;
	text-align: left;
	font-size: 20px;
	padding: 5px;
}

.post-dots-container {
	position: absolute;
	right: 0px;
	top: 10px;
	text-align: center;
	width: 40px;
	height: 100%;
}

.post-dots {
	color: white;
	background: none;
	border: none;
	font-size: 16px;
}


.post-title {
	display: inline-grid;
	grid-column: 2/3;
	grid-row: 2/3;
	font-weight: bold;
	font-size: 34px;
	text-align: center;
}

.post-content {
	display: inline-grid;
	grid-column: 2/3;
	grid-row: 3/4;
	padding: 30px;
}

.post-comments-button {
	display: inline-grid;
	border-top: solid 1px rgba(176, 179, 184, 0.05) !important;
	grid-column: 1/3;
	grid-row: 4/5;
	text-align: center;
	padding: 5px 0;
	border-bottom: 1px solid rgba(176, 179, 184, 0.05);
}

.comments {
	background-color: #242526;
	margin: 0 600px;
	margin-bottom: 50px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	padding: 10px;
}

#user-comment {
	border: 1px solid rgba(176, 179, 184, 0.05);
	border-radius: 5px;
	background-color: #3a3b3c;
	color: white;
}

#user-comment:focus {
	border-radius: 5px;
	outline: none;
	color: white;
}

.comment-author {
	margin-left: 10px;
	top: 0;
	color: white;
}

.comment-content {
	display: inline-block;
	background-color: rgba(128, 128, 128, .03);
	color: white;
	padding: 10px 20px;
	border-radius: 10px;
	margin-left: 20px;
}

#user-comment-content {
	width: calc(100% - 40px);
}

.active {
	color: #08658a !important;
}
</style>