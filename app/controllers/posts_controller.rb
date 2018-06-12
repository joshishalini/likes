class PostsController < ApplicationController
	def index
		@post = Post.all.order("created_at DESC")
	end

	def new
		@post = Post.new
	end

	def create
		@post = current_user.posts.build(posts_params)
		if @post.save
			p "============="
			redirect_to posts_path
		else
			p "---------------------------"
			render 'new'
		end	
	end

	def show
		@post = Post.find(params[:id])
	end

	private
		def posts_params
			params.require(:post).permit(:title,:text,:img)
		end

end
