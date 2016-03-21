helpers do

  def current_user
    User.find(session[:user_id]) if logged_in?
  end

  def logged_in?
    session[:user_id]
  end

  def owner?
    @user.id == logged_in?
  end

end
