from flask import Flask, jsonify
import geopandas as gpd

app = Flask(__name__)

@app.route('/api/geojson')
def geojson():
    gdf = gpd.read_file('data/BD_districts.geojson')
    return jsonify(gdf.__geo_interface__)

if __name__ == '__main__':
    app.run(debug=True)