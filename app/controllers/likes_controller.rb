class LikesController < ApplicationController
	def save_like
		p post_id = params[:id]
		p likes_params = { 
				user_id: current_user.id,
				post_id: post_id
			}
		@likes = Like.create(likes_params)
		unless @likes.errors.present?
			p @response = LiveNotifications::W3socket.push('like', 'event-name-'+post_id, {from: current_user.id})
			render json: @response

		else
			render json: {error: "true"}
		end
	end
end
