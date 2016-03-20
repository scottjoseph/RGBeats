helpers do

  def current_user
    User.find(session[:user_id]) if logged_in?
  end

  def logged_in?
    true if session[:user_id]
  end

  def owner?
    session[:user_id] == current_user.id
  end

end
