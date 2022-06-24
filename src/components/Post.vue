<template>
  <div class="post bg-dark">
		<div class="vote-buttons-container">
			<div class="vote-buttons">
				<button @click="sendVote('upvote', id)" class="vote" :class="{ active : upvote }" :id="'upvote-post-' + id"><i class="bi-chevron-up"></i></button>
				<div class="votes" id="votes-post-{{ id }}">{{ votes }}</div>
				<button @click="sendVote('downvote', id)" class="vote" :class="{ active : downvote }" :id="'downvote-post-' + id"><i class="bi-chevron-down"></i></button>
			</div>
		</div>
		<div class="author">
			<!--<div><i class="bi-person-circle"></i>&nbsp;{{ author }}</div>-->
      <div><img class="profile-image" :src="imgsrc">&ensp;{{ author }}</div>
		</div>
		<div class="title"><router-link :to="{name: 'Post', params: {id: id}}" class="title-link">{{ title }}</router-link></div>
		<div class="content" style="white-space: pre-wrap;">{{ content }}</div>
		<div class="comments-button">Comments ({{ n_comments }})</div>
	</div>
</template>

<script>
export default {
  props: {
    id: Number,
    author: String,
    imgsrc: String,
    title: String,
    content: String,
    n_votes: Number,
    n_comments: Number,
    upvote: Boolean,
    downvote: Boolean
  },
  data () {
    return {
      votes: this.n_votes
    };
  },
  methods: {
    sendVote: async function (type, id) {
      await fetch(`http://localhost:8000/post/${this.id}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: (type == 'upvote') })
      })
      .then((response) => response.json()
        .then((data) => {
          if (data.type == 'upvote') {
            $(`#upvote-post-${id}`).addClass('active');
            $(`#downvote-post-${id}`).removeClass('active');
          } else if (data.type == 'downvote') {
            $(`#upvote-post-${id}`).removeClass('active');
            $(`#downvote-post-${id}`).addClass('active');
          } else {
            $(`#upvote-post-${id}`).removeClass('active');
            $(`#downvote-post-${id}`).removeClass('active');
          }

          this.votes = data.n_votes;
        })
      );
    }
  }
}
</script>

<style scoped>
.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.post {
	display: grid;
	grid-template-columns: 50px calc(100% - 50px);
	grid-template-rows: 50px 50px auto auto;
	margin: 10px 600px;
	margin-bottom: 0;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	color: white;
}

.vote-buttons-container {
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

.votes {
	text-align: center;
}

.author {
	position: relative;
	display: inline-grid;
  border-bottom: solid 1px rgba(176, 179, 184, 0.1);
	grid-column: 2/3;
	grid-row: 1/2;
	text-align: left;
	font-size: 20px;
	padding: 5px;
}

.title {
	display: inline-grid;
	grid-column: 2/3;
	grid-row: 2/3;
	font-weight: bold;
	font-size: 34px;
	text-align: center;
}

.title-link {
  color: white;
  text-decoration: none;
}

.content {
	display: inline-grid;
	grid-column: 2/3;
	grid-row: 3/4;
	padding: 30px;
}

.comments-button {
	display: inline-grid;
	border-top: solid 1px rgba(176, 179, 184, 0.05) !important;
	grid-column: 1/3;
	grid-row: 4/5;
	text-align: center;
	padding: 5px 0;
	border-bottom: 1px solid rgba(176, 179, 184, 0.05);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

#user-comment {
	border: 1px solid rgba(176, 179, 184, 0.1);
	border-radius: 5px;
	background-color: #3a3b3c;
	color: white;
}

#user-comment:focus {
	border-radius: 5px;
	outline: none;
	color: white;
}

.active {
	color: #08658a;
}
</style>