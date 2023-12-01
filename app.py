from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/pizza')
def pizza():
    return render_template('pizza.html')

@app.route('/shashlik')
def shashlik():
    return render_template('shashlik.html')

@app.route('/desserts')
def desserts():
    return render_template('desserts.html')

@app.route('/hotdishes')
def hotdishes():
    return render_template('hotdishes.html')

@app.route('/breakfast')
def breakfast():
    return render_template('breakfast.html')

@app.route('/salads')
def salads():
    return render_template('salads.html')

@app.route('/menu_admin')
def menu_admin():
    return render_template('menu_admin.html')

@app.route('/orders')
def orders():
    return render_template('orders.html')

@app.route('/couriers')
def couriers():
    return render_template('couriers.html')

@app.route('/filials')
def filials():
    return render_template('filials.html')

@app.route('/promocode')
def promocode():
    return render_template('promocode.html')

if __name__ == '__main__':
    app.run(debug=True, port=5002)