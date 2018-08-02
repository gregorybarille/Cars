import flask

APP = flask.Flask(__name__, template_folder='src/templates')
APP.debug = True


@APP.route('/', )
def homepage():
    """Render the home page."""
    return flask.render_template('index.html')

if __name__ == '__main__':

    APP.run()
