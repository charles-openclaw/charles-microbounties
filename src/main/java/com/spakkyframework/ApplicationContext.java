public class ApplicationContext {
    // existing code...

    private List<Service> startedServices = new ArrayList<>();

    public void start() {
        try {
            for (Service service : services) {
                if (service instanceof SyncService) {
                    ((SyncService) service).start();
                    startedServices.add(service);
                } else if (service instanceof AsyncService) {
                    ((AsyncService) service).start();
                    startedServices.add(service);
                }
            }
        } catch (Exception e) {
            // stop started services before re-throwing the exception
            stopStartedServices();
            throw e;
        }
    }

    private void stopStartedServices() {
        for (Service service : startedServices) {
            if (service instanceof SyncService) {
                ((SyncService) service).stop();
            } else if (service instanceof AsyncService) {
                ((AsyncService) service).stop();
            }
        }
        startedServices.clear();
    }

    // existing code...
}