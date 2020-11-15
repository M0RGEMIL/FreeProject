export class UnitService {

	units = [
	    {
	      id: 1,
	      name: 'Machine à laver',
	      status: 'éteint'
	    },
	    {
	      id: 2,
	      name: 'Frigo',
	      status: 'allumé'
	    },
	    {
	      id: 3,
	      name: 'Ordinateur',
	      status: 'éteint'
	    }
	];

	getUnitById(id: number) {
    const unit = this.units.find(
      (s) => {
        return s.id === id;
      }
    );
    return unit;
}
}
