/*  
~  Unless required by applicable law or agreed to in writing, software
  ~  distributed under the License is distributed on an "AS IS" BASIS,
  ~  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~  See the License for the specific language governing permissions and
  ~  limitations under the License.
*/
export default function AllergiesModal($uibModal, allergiesActions, $ngRedux) {
  var isModalClosed = true;

  var openModal = function (patient, modal, dicomImageId) {
    if (isModalClosed) {
      isModalClosed = false;

      var modalInstance = $uibModal.open({
        template: require('./image-modal.html'),
        size: 'lg',
        controller: function ($scope, $state, $uibModalInstance) {
          $scope.patient = patient;
          $scope.modal = modal;
          $scope.dicomId = dicomImageId;

          $scope.ok = function () {
            $uibModalInstance.close();
          };
        }
      });
    }

    modalInstance.result.then(function() {
      isModalClosed = true;
    }, function() {
      isModalClosed = true;
    });

  };

  return {
    isModalClosed: isModalClosed,
    openModal: openModal
  };
}
AllergiesModal.$inject = ['$uibModal', 'allergiesActions', '$ngRedux'];