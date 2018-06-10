class LikesController < ApplicationController
	def save_like
		post_id = params[:id]
		@post = Post.find(params[:id])
		p @post.user.id
		user = current_user.id.to_s
		likes_params = { 
				user_id: current_user.id,
				post_id: post_id
			}
		@likes = Like.create(likes_params)
		unless @likes.errors.present?
			p@response = LiveNotifications::W3socket.push('like', 'event-name-'+user, {from: current_user.email, to: @post.user.id})
			render json: @response

		else
			render json: {error: "true"}
		end
	end
end
