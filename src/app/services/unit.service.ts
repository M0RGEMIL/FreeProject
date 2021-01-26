export class UnitService {

	units = [
	    {
	      id: 1,
	      name: 'Trier les données',
	      status: 'éteint'
	    },
	    {
	      id: 2,
	      name: 'Frigo',
	      status: 'check'
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
