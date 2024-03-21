package radian628.bathrooms

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class SelectionViewViewModel: ViewModel() {
    private val repository = SelectionViewBathroomRepository()

    private val _bathrooms = MutableLiveData<ArrayList<Floor>>(null)
    val bathrooms: LiveData<ArrayList<Floor>> = _bathrooms
    private val _error = MutableLiveData<Throwable?>(null)
    val error: LiveData<Throwable?> = _error
    private val _loading = MutableLiveData<Boolean>(false)
    val loading: LiveData<Boolean> = _loading

    fun loadData(buildingName: String) {
        viewModelScope.launch {
            _loading.value = true
            val result = repository.loadData("The Valley Library")
            _loading.value = false
            _bathrooms.value = result
        }
    }
}