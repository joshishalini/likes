class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
  	'/posts'
  end

  protected

    def set_w3sockets_key
      @w3sockets_key = YAML.load_file("#{Rails.root}/config/w3sockets_config.yml")[Rails.env]["public_key"]
    end
end
