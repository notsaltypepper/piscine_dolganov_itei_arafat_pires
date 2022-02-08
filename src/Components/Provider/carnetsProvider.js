export class CarnetFavProvider {
  carnetFav
  constructor() {
    this.carnetFav = this.getcarnetFav()
  }

  save() {
    localStorage.setItem('stockage-carnetFav', JSON.stringify(this.carnetFav))
  }

  load() {
    let datas = localStorage.getItem('stockage-carnetFav')
    if (datas === null) datas = '[]'
    datas = JSON.parse(datas)
    this.carnetFav = datas
  }

  getcarnetFav() {
    this.load()
    return this.carnetFav
  }

  add(carnet) {
    const id = Date.now()
    let tmp = { ...carnet }
    tmp.id = id
    this.carnetFav.push(tmp)
    this.save()
  }

  update(carnet) {
    const { id } = carnet
    let indice = -1
    for (let i = 0; i < this.carnetFav.length; i++)
      if (this.carnetFav[i].id === Number(id)) indice = i

    if (indice === -1) return false
    this.carnetFav[indice] = carnet
    this.save()
    return true
  }

  remove(carnet) {
    let indice = -1
    for (let i = 0; i < this.carnetFav.length; i++)
      if (this.carnetFav[i].id === Number(carnet.id)) indice = i

    if (indice === -1) return false

    this.carnetFav.splice(indice, 1)
    this.save()
    return true
  }

  getCarnetFavById(id) {
    let res = this.carnetFav.filter(carnet => carnet.id === Number(id))
    return res.length === 0 ? false : res[0]
  }
}
