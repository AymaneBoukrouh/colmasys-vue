<script setup>
import ChatMessage from '@/components/ChatMessage.vue'
</script>

<template>
  <div class="main bg-dark" style="height: calc(100vh - 80px);">
    <div class="position-relative card-body text-light h-100 mh-100">
      <div id="messages-box" class="overflow-scroll" style="max-height: calc(100% - 50px); padding-right: 20px">
        <div v-for="message in messages" class="mh-100">
          <ChatMessage
            :content = 'message.content'
            :sent = 'message.sent'
            :received = 'message.received'
          />
        </div>
      </div>
      <div class="message-box position-absolute bottom-0 form-outline">
        <input @keyup.enter="sendMessage" v-model="message" class="form-control" type="text" id="user-message" placeholder="message...">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendMessage: async function (event) {
			const content = this.message;

      var socket = io('http://localhost:8000/ws', {
        cors: {
          origin: '*',
          methods: ['GET', 'POST']
        }
      });
      socket.emit('message', {
        content: content
      });

      /*
			
			const response = await fetch(`http://localhost:8000/post/${this.id}/comment`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ content: content })
      });
      */
			this.messages.push({
				content: content,
        sent: true
			});

			this.message = '';

      var e = document.getElementById('messages-box');
      e.scrollTop = e.scrollHeight;
		},
  },
  data () {
    return {
      message: null,
      messages: [
        {content: 'Hello!', received: true},
        {content: 'Hi, how are you?', sent: true},
        {content: 'Good, you?', received: true},
        {content: 'Same here.', sent: true}
      ]
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 97%;
  border-radius: 10px;
  align-items: flex-start;
}

#chat1 .form-outline .form-control~.form-notch div {
pointer-events: none;
border: 1px solid;
border-color: #eee;
box-sizing: border-box;
background: transparent;
}

#chat1 .form-outline .form-control~.form-notch .form-notch-leading {
left: 0;
top: 0;
height: 100%;
border-right: none;
border-radius: .65rem 0 0 .65rem;
}

#chat1 .form-outline .form-control~.form-notch .form-notch-middle {
flex: 0 0 auto;
max-width: calc(100% - 1rem);
height: 100%;
border-right: none;
border-left: none;
}

#chat1 .form-outline .form-control~.form-notch .form-notch-trailing {
flex-grow: 1;
height: 100%;
border-left: none;
border-radius: 0 .65rem .65rem 0;
}

#chat1 .form-outline .form-control:focus~.form-notch .form-notch-leading {
border-top: 0.125rem solid #39c0ed;
border-bottom: 0.125rem solid #39c0ed;
border-left: 0.125rem solid #39c0ed;
}

#chat1 .form-outline .form-control:focus~.form-notch .form-notch-leading,
#chat1 .form-outline .form-control.active~.form-notch .form-notch-leading {
border-right: none;
transition: all 0.2s linear;
}

#chat1 .form-outline .form-control:focus~.form-notch .form-notch-middle {
border-bottom: 0.125rem solid;
border-color: #39c0ed;
}

#chat1 .form-outline .form-control:focus~.form-notch .form-notch-middle,
#chat1 .form-outline .form-control.active~.form-notch .form-notch-middle {
border-top: none;
border-right: none;
border-left: none;
transition: all 0.2s linear;
}

#chat1 .form-outline .form-control:focus~.form-notch .form-notch-trailing {
border-top: 0.125rem solid #39c0ed;
border-bottom: 0.125rem solid #39c0ed;
border-right: 0.125rem solid #39c0ed;
}

#chat1 .form-outline .form-control:focus~.form-notch .form-notch-trailing,
#chat1 .form-outline .form-control.active~.form-notch .form-notch-trailing {
border-left: none;
transition: all 0.2s linear;
}

#chat1 .form-outline .form-control:focus~.form-label {
color: #39c0ed;
}

#chat1 .form-outline .form-control~.form-label {
color: #bfbfbf;
}

.max-height-100 {
  max-height: 100%;
}

.message-box {
  margin-bottom: 15px;
  width: calc(100% - 100px);
}
</style>