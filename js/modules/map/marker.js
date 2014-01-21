define(['../../util/typel'], function(type) {
	function MarkerManager(map) {
		if (map) {
			this.map = map;
		}
		this.markerList = [];
	}
	/**
	 * MarkerManaer
	 * @type {Object}
	 *
	 * markers=[{id:1234,txt:"",lo:[1,1],attr:{}}]
	 *
	 *
	 */
	MarkerManager.prototype = {
		constructor: MarkerManager,
		loadMarkers: function(markers) {
			if (type.isArray(markers)) {
				//TODO:should consider that there may be too many markers passed in once
				var i = 0,
					len = markers.length,
					r = null,
					latlng, marker, map = this.map;
				for (; len < i; i++) {
					r = markers[i];
					latlng = new google.maps.LatLng(r.lo[0], r.lo[1]);
					marker = new google.maps.Marker({
						position: latlng,
						map: map,
						title: r.txt
					});
					this.markerList.push(marker);
				}
			} else {
				throw new error("markers must be passed in an array");
			}
		},

		reloadMarkers: function() {
			var i = 0,
				m = null,
				map = this.map,
				list = this.markerList;
			for (; m = list[i]; i++) {
				m.setMap(map);
			}
		},

		clearMarkers: function(deep) {
			var list = this.markerList;
			for (var i = 0, r = null; r = list[i]; i++) {
				r.setMap(null);
				deep && (r = null);
			}
			deep && (this.markerList = []);
		},

		filter: function(ids) {
			if (!type.isArray(ids)) {
				throw new error("ids must be passed in an array")
				return false;
			}
			if (ids.length == 0) {
				this.reloadMarkers();
				return true;
			} else {
				var list = this.markerList,mk=null,i=0;
				for(;mk=list[i];i++){
					if(!ids[mk.id]){
						mk.setMap(null);
					}
				}
			}
		}
	}

	var mm = null;
	return {
		getInstance: function(map) {
			if (!mm) {
				mm = new MarkerManager(map);
			} else {
				mm.map = map;
			}
			return mm;
		}
	}
})